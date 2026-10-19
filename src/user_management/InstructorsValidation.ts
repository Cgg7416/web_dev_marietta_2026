import type { FormEvent } from "react";

export function validateInstructorForm(
  event: FormEvent<HTMLFormElement>
) {
  // Prevent the page from refreshing
  event.preventDefault();

  console.log("Instructor validation is running!");

  // Get the form values
  const form = event.currentTarget;

  const firstName = (
    form.querySelector("#instructorFirstName") as HTMLInputElement
  ).value.trim();

  const lastName = (
    form.querySelector("#instructorLastName") as HTMLInputElement
  ).value.trim();

  const department = (
    form.querySelector("#instructorDepartment") as HTMLInputElement
  ).value.trim();

  const email = (
    form.querySelector("#instructorEmail") as HTMLInputElement
  ).value.trim();

  // Allow letters, spaces, hyphens, and apostrophes
  const namePattern = /^[A-Za-z '-]+$/;

  // Email: 2 or 3 letters, exactly 3 digits,
  // followed by @marietta.edu
  const emailPattern =
    /^[A-Za-z]{2,3}[0-9]{3}@marietta\.edu$/;

  const errors: string[] = [];

  // Validate first name
  if (firstName === "") {
    errors.push("Instructor's First Name is required.");
  } else if (!namePattern.test(firstName)) {
    errors.push(
      "Instructor's First Name may only contain letters, spaces, hyphens, and apostrophes."
    );
  }

  // Validate last name
  if (lastName === "") {
    errors.push("Instructor's Last Name is required.");
  } else if (!namePattern.test(lastName)) {
    errors.push(
      "Instructor's Last Name may only contain letters, spaces, hyphens, and apostrophes."
    );
  }

  // Validate department (optional)
  if (
    department !== "" &&
    !namePattern.test(department)
  ) {
    errors.push(
      "Instructor's Department may only contain letters, spaces, hyphens, and apostrophes."
    );
  }

  // Validate email
  if (email === "") {
    errors.push("Instructor's Email Address is required.");
  } else if (!emailPattern.test(email)) {
    errors.push(
      "Email must follow the format ab123@marietta.edu or abc123@marietta.edu."
    );
  }

  // Display errors or success
  if (errors.length > 0) {
    alert(
      "Please correct the following errors:\n\n" +
        errors.join("\n")
    );
    return;
  }

  alert("Instructor information passed validation!");
}
