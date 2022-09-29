// /** @format */

import { ActionTypes } from "./Types";
import { data as phData } from "./placeholderData";

export const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: { 
    dataType: dataType, 
    data: phData[dataType] },
});

// This function can be processed by the data store to alter the data it contains.
// It holds the object that contains the Action type, data type, and the data itself.
