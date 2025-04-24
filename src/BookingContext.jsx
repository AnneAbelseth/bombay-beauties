import { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [dishes, setDishes] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    note: '',
  });

  return (
    <BookingContext.Provider value={{
      dishes, setDishes,
      userInfo, setUserInfo
    }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
