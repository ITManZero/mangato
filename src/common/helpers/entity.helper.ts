export class EntityHelper {


  public static submitData<E>(dto: any, entity: E): E {
    let value: any;
    // if (!isObject(dto) || !isObject(entity))
    //   throw new Error("matched values must be object");
    for (const key in dto) {
      if (Object.prototype.hasOwnProperty.call(dto, key)) {
        value = dto[key];
        // const dataType = getPropertyType(value);
        // if (!overwrite && dataType == DataType.ARRAY) continue;
        // if (dataType == DataType.OBJECT) entity[key] = mapDtoToEntity(entity[key], value);
        // else
        entity[key] = value;
      }
    }
    return entity;
  }


  public static updateData<E>(dto: any, entity: E): E {
    let value: any;
    // if (!isObject(dto) || !isObject(entity))
    //   throw new Error("matched values must be object");
    for (const key in dto) {
      if (Object.prototype.hasOwnProperty.call(dto, key) && (value = dto[key]) != undefined) {
        // const dataType = getPropertyType(value);
        // if (!overwrite && dataType == DataType.ARRAY) continue;
        // if (dataType == DataType.OBJECT) entity[key] = mapDtoToEntity(entity[key], value);
        // else
        entity[key] = value;
      }
    }
    return entity;
  }

}
