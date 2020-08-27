import Teacher from '../../models/Teacher'
import { url } from '../../helper/urlRequest'
export const GET_ALL_TEACHERS = "GET_ALL"
export const UPDATE_TEACHER ="UPDATE_TEACHER"

export const getAllTeachers = (query, city) =>{

    return async (dispatch, getState) =>{

        try{
 
            const response = await fetch(`${url}teachers`,{method:'GET'})
            if(!response.ok){
                throw new Error('Somenting was wrong')
            }

            const data = await response.json();
            const loadedTeachers =[];

            for(const key in data){
                loadedTeachers.push(new Teacher(
                    data[key]._id,
                    null,
                    data[key].firstName,
                    data[key].lastName,
                    data[key].description,
                    data[key].teacher.location.address,
                    data[key].topics,
                    data[key].teacher.location.lat,
                    data[key].teacher.location.lng

                ))
            }

            
            dispatch({
                type:GET_ALL_TEACHERS,
                teachers:loadedTeachers
            })



        }catch(error){

            console.log(error)
        }
    }

}