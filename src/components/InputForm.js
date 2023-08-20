import React from "react";
import "../index.css";

const InputForm = (props) => {
  const input =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer";
  const label =
    "peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <form>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_name"
          id="floating_name"
          class={input}
          placeholder=" "
          required
        />
        <label for="floating_name" class={label}>
          Name
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          class={input}
          placeholder=" "
          required
        />
        <label for="floating_email" class={label}>
          Email address
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="tel"
          name="floating_phone"
          id="floating_phone"
          class={input}
          pattern="[0-9]{10}"
          placeholder=" "
          required
        />
        <label for="floating_phone" class={label}>
          Phone number (10-digit)
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="tel"
          name="floating_phone"
          id="floating_phone"
          class={input}
          placeholder=" "
          pattern="[0-9]{10}"
          required
        />
        <label for="floating_phone" class={label}>
          Parent's number (10-digit)
        </label>
      </div>
      <select
        id="current_class"
        class="bg-transparent mb-6 text-gray-400 border-gray-400 border-b-2 border-0 text-sm focus:text-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 block w-full py-2.5 px-0 peer"
        required
      >
        <option selected disabled>
          Select your class
        </option>
        <option>Class-X (ICSE)</option>
        <option>Class-X (CBSE)</option>
        <option>Class-XII (ISC)</option>
        <option>Class-XII (CBSE)</option>
        <option>Others</option>
      </select>
      <button
        type="submit"
        class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
