const fetchAPI = async () => {
  try {
    const jsonResponse = await fetch("https://api.github.com/users/denoland");
    const jsonData = await jsonResponse.json();
    console.log(jsonData);

    const fileResponse = await fetch("https://deno.land/logo.svg");
    if (fileResponse.body) {
      const file = await Deno.open("./logo.svg", { write: true, create: true });
      await fileResponse.body.pipeTo(file.writable);
    }
  } catch (error) {
    console.log(error);
  }
};

fetchAPI();
