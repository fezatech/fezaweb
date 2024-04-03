export function constructMetadata({
  title = " FEZA.TECH | Innovation Solutions - Efficiently Proceses ",
  description = " FEZA.TECH | Innovation Solutions - Efficiently Proceses",
  image = "/agency.PNG",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@feza.tech",
    },
    icons,
    metadataBase: new URL("https://fezatech.net"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
