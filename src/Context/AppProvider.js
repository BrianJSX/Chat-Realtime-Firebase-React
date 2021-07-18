import { ConsoleSqlOutlined } from "@ant-design/icons";
import { find } from "lodash";
import React, { createContext, useContext, useMemo, useState } from "react";
import useFirebase from "../hooks/useFirebase";
import useRoomList from "../hooks/useRoomList";
import { AuthContext } from "./AuthProvider";

export const AppContext = createContext();

function AppProvider({ children }) {
  const { user } = useContext(AuthContext);
  const { uid } = user;

  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState(false);

  //Room condition
  const roomsCondition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  let rooms = useFirebase("rooms", roomsCondition);

  //get room selected
  const selectRoom = useMemo(() => {
    return find(rooms, function(o) { return o.id === selectedRoomId; });
  }, [rooms, selectedRoomId]);

  //users condition 
  const usersCondition = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: selectRoom?.members,
    };
  }, [selectRoom?.members]);

  let members = useFirebase("users", usersCondition);
  
  return (
    <AppContext.Provider
      value={{
        rooms,
        isAddRoomVisible,
        setIsAddRoomVisible,
        selectedRoomId,
        setSelectedRoomId,
        selectRoom, 
        members,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
