export const getGift = async ( category) => {
    const url = `https:/api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=djgO0iAU2NEcprVBZ5e6eDcela4IgLVn`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gif = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gif
  };
  