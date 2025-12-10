const btnDashBoard = document.getElementById("dashboardbutton");
//! ROTEADOR RAÇUDO
const router = (input: string) => {
  const windowClear = window.location.pathname.split("/");

  switch (input) {
    case "dashboard":
      
        history.pushState("", "", "/dashboard");
      const lastElement = document.getElementById(
        windowClear[1]
      ) as HTMLElement;
      
      const dashboard = document.getElementById("dashboard") as HTMLElement;
      dashboard.hidden = false;
      
      break;
    default:
      break;
  }
};
btnDashBoard?.addEventListener("click", () => {
  router("dashboard");
});
