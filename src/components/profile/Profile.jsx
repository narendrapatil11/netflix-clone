import React, { useEffect, useState } from 'react';
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { getProducts, subscribePlan } from "../../shared/api";
import './profile.scss'
import { db } from "../../firebase";

const Profile = ({ onSignOut }) => {
  const { user } = useSelector(selectUser);
  const [ plans, setPlans ] = useState([])
  const [ subscription, setSubscription ] = useState(null);

  useEffect(() => {
    const res = db
      .collection('customers')
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((snapshots) => {
        snapshots.forEach(async (sub) => {
          const data = {
            role: sub.get('role'),
            planStart: sub.get('current_period_start'),
            planEnd: sub.get('current_period_end'),
          }
          setSubscription(data);
        })
      })
  }, [ user.uid ]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log(data);
        setPlans(data || []);
      });
  }, [])

  const onSubscribe = (priceId) => {
    subscribePlan(user.uid, priceId).then((data) => {
      console.log(data);
    });
  }

  function getSelectedPlan() {
    if (plans.length && subscription) {
      const planData = plans.find((plan) => (plan.priceId === subscription?.role));
      return planData?.name;
    }
    return ''
  }

  return (
    <div className="profile">
      <div className="profile__header">
        Edit Profile
      </div>
      <div className="profile__container">
        <div className="profile__avatar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </div>
        <div className="profile__form">
          <div className="profile__form-email">{ user.email }</div>
          <div className="profile__form-planHeader">Plans ( Current: { getSelectedPlan() } )</div>
          {
            subscription && (
              <h4 className="profile__form-planSubHeader">Renewal
                date: { subscription?.planEnd?.toDate()?.toLocaleDateString() }</h4>
            )
          }
          {
            plans.length && plans.map((plan) => {
              const active = plan.priceId === subscription?.role;
              return (
                <div className="profile__form-plan" key={ plan.priceId }>
                  <div className="title">{ plan.name }<span>{ plan.description }</span></div>
                  <button
                    className={ `${ active ? 'active' : '' }` }
                    onClick={ () => {
                      onSubscribe(plan.priceId)
                    } }>{ active ? 'Current Package' : 'Subscribe' }
                  </button>
                </div>
              )
            })
          }
          <button className="profile__form-signout" onClick={ onSignOut }>Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;