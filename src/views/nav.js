import { html } from "../../lit-html/lit-html.js";
import { logoutUser } from "../api/auth.js";
import page from "../../page/page.mjs";

export const navTemplate = (isUser) => html`
  <div>
    <a href="/dashboard">Fun Facts</a>
  </div>
  ${isUser ? userNav : guestNav}
`;

const userNav = html` <div class="user">
  <a href="/create">Add Fact</a>
  <a @click=${logoutSubmit} href="javascript:void(0)">Logout</a>
</div>`;

const guestNav = html` <div class="guest">
  <a href="/login">Login</a>
  <a href="/register">Register</a>
</div>`;

function logoutSubmit(e) {
  e.preventDefault();
  logoutUser();
  page.redirect("/");
}
