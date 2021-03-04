import axios from "axios";

export default {
  getEmployees: function () {
    return axios
      .get("https://randomuser.me/api/?results=20&nat=us")
      .then((res) => {
        const employees = res.data.results;
        return employees.map((employee) => {
          return {
            id: employee.id.value,
            firstName: employee.name.first,
            lastName: employee.name.last,
            email: employee.email,
            picture: employee.picture.medium,
          };
        });
      });
  },
};
