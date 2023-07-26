import axios from "axios";
import { deleteById, getListUser } from "../service/userService";


export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

export const getUser = () => {
  return async (dispatch) => {
    const data = await getListUser();
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: data
    },
    );
  };

};
export const deleteUser = (id) => {
  return async (dispatch) => {
   await deleteById(id)
   const data = await getListUser();
   dispatch({
     type: FETCH_USER_SUCCESS,
     payload: data
   },
   );
  };
};