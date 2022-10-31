export const dateCount = (createdAt: string) => {
  const date = new Date();
  const jobDate = new Date(createdAt);

  const difference = date.getTime() - jobDate.getTime();

  const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 31 * 12));
  const month = Math.floor(difference / (1000 * 60 * 60 * 24 * 31));
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor(difference / (1000 * 60));

  switch (true) {
    case minutes < 1:
      return "now";
    case minutes % 10 === 1 && minutes !== 11 && minutes < 60:
      return minutes + " minute ago";
    case minutes < 60:
      return minutes + " minutes ago";
    case hours % 10 === 1 && hours !== 11 && hours < 24:
      return hours + " hour ago";
    case hours < 24:
      return hours + " hours ago";
    case days % 10 === 1 && days !== 11 && days < 31:
      return days + "day ago";
    case days < 31:
      return days + " days ago";
    case month % 10 === 1 && month !== 11 && month < 12:
      return month + " month ago";
    case month < 12:
      return month + " months ago";
    case years % 10 === 1 && years !== 11:
      return years + " year ago";
    case years >= 1:
      return years + " years ago";
  }
};
