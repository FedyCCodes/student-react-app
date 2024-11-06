// router.jsx
import { createBrowserRouter } from 'react-router-dom';

import { ClassList } from './ClassList.jsx';
import StudentPage from './pages/StudentPage'
import StudentSubmitPage from './pages/StudentSubmitPage'

const router = createBrowserRouter([{
  path: '/',
  element: <ClassList/>
}, {
  path: '/student/:id', // /character/{id}
  element: <StudentPage/>
}, {
  path: '/student/submit', // /character/{id}
  element: <StudentSubmitPage/>
}]);


export default router;