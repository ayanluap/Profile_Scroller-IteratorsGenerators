// Calling my Created data to this function
const profile = profilesIterator(data);

// Next Button Event
document.getElementById('next').addEventListener('click', getProfile);

// Iterate through profiles
function profilesIterator(profile) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profile.length
        ? { value: profile[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// Call first profile again when all ends
getProfile();

// getting each profiles to the browser
function getProfile() {
  const currentProfile = profile.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profInfo').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name : ${currentProfile.name}</li>
        <li class="list-group-item">Age : ${currentProfile.age}</li>
        <li class="list-group-item">Lived In : ${currentProfile.livedIn}</li>
        <li class="list-group-item">Martial Status : ${currentProfile.martialStat}</li>
        <li class="list-group-item">Proffession : ${currentProfile.job}</li>
    </ul>
      `;

    document.getElementById(
      'img'
    ).innerHTML = `<img src="${currentProfile.img}" style="border-radius: 1000px; border: 3px solid #17a2b8;">`;
  } else {
    // reload window
    window.location.reload();
  }
}
