export default function ProfilePicture() {
  const iconSource = "https://cdn-icons-png.flaticon.com/512/4146/4146794.png";
  const imageSource =
    "https://scontent.fabb1-2.fna.fbcdn.net/v/t1.6435-9/138331493_734517440584757_525350524939210292_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHT5nFieN6lNJpbICApMH3u2VPMs4j5dgTZU8yziPl2BLeU1Tm17YHHLvZ815FtH9cUVLo6fGdltW8QplGw3Xmy&_nc_ohc=lAyt11UaciQAX--cI8w&_nc_ht=scontent.fabb1-2.fna&oh=00_AfCKJQqiuFkLlDfcuzZmbEgHKdn0EdqLJqkzte95Qg2iDQ&oe=638AE575";
  return (
    <div className="profimg__container" tabindex="0">
      <img alt="Profile Image" src={imageSource} id="profile__img" />
      <div class="profimg__overlay">
        <img src={iconSource} alt="Photo Icon" class="profimg__icon" />
      </div>
    </div>
  );
}
