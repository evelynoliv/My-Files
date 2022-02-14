import Swal from "sweetalert2";

export const MessageSweet = Swal.mixin({
    icon: "warning",  
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
  
  });