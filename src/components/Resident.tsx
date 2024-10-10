import type { Resident } from "../../types";

export default function Resident({ id, age, name, ssn, gender }: Resident) {
  return (
    <li>
      <strong>id:</strong> {id} <br />
      <strong>name:</strong> {name} <br />
      <strong>age:</strong> {age} <br />
      <strong>ssn:</strong> {ssn} <br />
      <strong>gender:</strong> {gender} <br />
    </li>
  );
}
