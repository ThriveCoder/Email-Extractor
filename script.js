const txt1 = document.querySelector("#txtcontent");

const btn = document.querySelector("button");

const res = document.querySelector("#result");

const sel = document.querySelector("#sep");

const str = new String();

txt1.value = str;

btn.addEventListener("click", getEmail);

function getEmail() {
  const temp = txt1.value;

  const regex = /([A-Za-z0-9_-]+@)([A-Za-z0-9_-]+\.[A-Za-z0-9_-]+)/gi;
  const emailsRaw = temp.match(regex);

  const emails = [];

  if (emailsRaw != null) {
    emailsRaw.forEach((email) => {
      if (!emails.includes(email)) {
        emails.push(email);
      }
    });
  }

  const div = document.createElement("div");

  div.textContent = `Found Emails: (${emails.length})`;

  res.append(div);
  if (emails.length > 0) {
    const txta = document.createElement("textarea");
    const myEmails = emails.join(sep.value);
    txta.innerHTML = myEmails;

    res.append(txta);
    txta.focus();
    txta.addEventListener("click", () => {
      console.log("selected");
      txta.select();
    });
    downBtn = document.createElement("button");
    // const i = document.createElement("i");
    // i.setAttribute("class", "fa fa-download");
    downBtn.textContent = `Download (${emails.length}) Emails`;

    res.append(downBtn);

    downBtn.addEventListener("click", () => {
      const fileName = "Email.txt";
      const a = document.createElement("a");
      a.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(myEmails)
      );
      a.setAttribute("download", fileName);
      a.style.display = "none";
      document.body.append(a);
      a.click();
      document.body.remove(a);
    });
  }

  console.log(emailsRaw);
  console.log(emails);
}
