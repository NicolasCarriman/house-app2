import userEvent from '@testing-library/user-event';
import {useState} from 'react';
import FormPage from './pages/Houseform/formPage';
import {ViewsContext, sloganContext, btnContext} from './pages/components/context/form/viewContext'
import { showHouseViews, slogantxts, buttonElement, ShowViewsType} from './pages/components/context/form/viewType';
import UserFormPage from './pages/UserForm/userFormPage';

function App() {
  const [showViews, setshowViews] = useState<ShowViewsType>(showHouseViews)
  const [showTxt, setShowTxt] = useState(slogantxts)
  const [btnElement, setBtnElement] = useState(buttonElement)
  const [pages, setPages] = useState(false)
  return (
          <div>
            <ViewsContext.Provider value={{ showViews, setshowViews }}>
              {
                pages? 
                <sloganContext.Provider value={{showTxt, setShowTxt}}>
                <btnContext.Provider value={{btnElement, setBtnElement}}>
                  <FormPage/>
                </btnContext.Provider>
              </sloganContext.Provider>
              : 
              <UserFormPage></UserFormPage>
              }
              
            </ViewsContext.Provider>
          </div>
  );
}
export default App;