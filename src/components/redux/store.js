//const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit"
import {contactsReducer, filtrReducer} from './reducer'



export const store = configureStore(
    {reduce:
 {
contactsUser: contactsReducer,
     
filterUser:   filtrReducer,    
      }

})