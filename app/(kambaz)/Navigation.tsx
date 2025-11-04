import Link from "next/link";
export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
      <Link href="/Account" id="wd-account-link">Account</Link><br/>
      <Link href="/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
      <Link href="/Dashboard" id="wd-course-link">Courses</Link><br/>
      <a href="https://calendar.google.com/" id="wd-cal-link" target="_blank">Calendar</a><br/>
      <a href="https://outlook.office.com/" id="wd-inb-link" target="_blank">Inbox</a><br/>
      <Link href="/Labs" id="wd-labs-link">Labs</Link><br/>
    </div>
);}
