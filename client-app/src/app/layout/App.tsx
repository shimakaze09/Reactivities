import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Route exact path="/" Component={HomePage} />
        <Route path='/activities' Component={ActivityDashboard} />
        <Route path='/createActivities' Component={ActivityForm} />
      </Container>
    </>
  );
}

export default observer(App);
