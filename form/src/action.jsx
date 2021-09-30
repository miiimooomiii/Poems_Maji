export default function blob() {
  const target = document.getElementById("blobbox");
  if (target.className == null || target.className == "") {
    target.className = "mini";
  } else {
    target.className = "";
  }
}
