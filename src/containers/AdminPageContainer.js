import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const AdminDashboardContainer = lazy(() => import('containers/AdminDashboardContainer'));

const AdminPageContainer = () => (
    <Suspense fallback={<Admin />}>
      <Switch>
        <Route exact path="/Admin" component={AdminDashboardContainer} />
        {/* <Route path="/Admin/topping" component={} />
        <Route path="/Admin/users" component={} />
        <Route path="/Admin/comments" component={} />
        <Route path="/Admin/feedbacks" component={} /> */}
        
      </Switch>
    </Suspense>
  );
  
  
function Admin() {
    return (
      <div>
        admin
      </div>
    );
  }
export default AdminPageContainer;