import React, { createContext, useContext, useState } from "react";

const DataContext=createContext();                  //  КОНТЕКСТ

export const DataProvider =({children})=>{          //  КОМПОНЕНТ в который оборачиваем App 
    const initState={           //Начальный объект стэйта
        showcase:false,
        info:false,
        case:false,
        additem:false,
    }
    const [data,setDate]=useState(initState);       //  Локальный СТЭЙТ
    

    const setValues=(values)=>{                     //Функция для ОБНОВЛЕНИЕ СТЭЙТА и сохранения не тронутых полей
        setDate((prevData)=>({  // ! колбюк в setDate принимает НАЧАЛЬНОЕ СОСТОЯНИЕ
            ...prevData,
            ...values
        }))
    }

                                                    //Оборачиваем детей компонета (App) и провайдером передаем value (стэйт и функция обновления стэйта)
    return <DataContext.Provider value={{data,setValues}}>{children}</DataContext.Provider>;
}

export const useData=()=>useContext(DataContext);   //Хук - возвращает стэйт (data из useState) и setValues (наша функция обновления) 