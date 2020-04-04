export const random_sex = sex => {
  const males = [
    'https://i.ya-webdesign.com/images/male-avatar-icon-png-7.png',
    'https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/39-512.png',
    'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png',
  ];
  const females = [
    'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png',
    'https://i.ya-webdesign.com/images/avatar-icon-png-1.png',
    'https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png',
  ];

  if (sex === 'M') {
    return males[Math.floor(Math.random() * males.length)];
  } else {
    return females[Math.floor(Math.random() * females.length)];
  }
};
