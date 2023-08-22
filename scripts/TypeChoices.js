import { setTypeId } from "./TransientState.js";

export const TypeOptions = async () => {
  const response = await fetch("http://localhost:8088/types");
  const types = await response.json();
  const typesArray = types.map((type) => {
    return `<input type="radio" name="types" value="${type.id}"/>${type.name}`;
  });
  const typeOptions = typesArray.join(" ");
  return typeOptions;
};

const handleTypeIdStateUpdate = (changeEvent) => {
  if (changeEvent.target.name === "types") {
    const typeValueIdAsInt = parseInt(changeEvent.target.value);
    setTypeId(typeValueIdAsInt);
  }
};
document.addEventListener("change", handleTypeIdStateUpdate);
