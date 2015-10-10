export const UPDATE_PRODUCTID = "UPDATE_PRODUCTID";
export const UPDATE_ATTRIBUTEVALUES = "UPDATE_ATTRIBUTEVALUES";
export const UPDATE_MANUFACTURER = "UPDATE_MANUFACTURER";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_CLSIDANDCLSGRPID = "UPDATE_CLSIDANDCLSGRPID";
export const UPDATE_CATALOGID = "UPDATE_CATALOGID";
export const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";
export const UPDATE_LONGDESCRIPTION = "UPDATE_LONGDESCRIPTION";
export const UPDATE_STATUSID = "UPDATE_STATUS";

export function updateProductId(value) {
  return {type: UPDATE_PRODUCTID, value: value};
}

export function updateAttributeValues(array) {
  return {type: UPDATE_ATTRIBUTEVALUES, array: array};
}

export function updateManufacturer(value) {
  return {type: UPDATE_MANUFACTURER, value: value};
}

export function updatePrice(value) {
  return {type: UPDATE_PRICE, price: value};
}

export function updateClsIdAndClsGrpId(classificationId, classificationGroupId) {
  return {type: UPDATE_CLSIDANDCLSGRPID, classificationId: classificationId, classificationGroupId: classificationGroupId};
}

export function updateCatalogId(value) {
  return {type: UPDATE_CATALOGID, value: value};
}

export function updateDescription(value) {
  return {type: UPDATE_DESCRIPTION, value: value};
}

export function updateLongDescription(value) {
  return {type: UPDATE_LONGDESCRIPTION, value: value};
}

export function updateStatusId(value) {
  return {type: UPDATE_STATUSID, value: value};
}
