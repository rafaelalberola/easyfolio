# Easyfolio | Gatsby & Prismic Portfolio

Diseño sobrio y sencillo desarrollado con [Gatsby v2](https://www.gatsbyjs.org) y [Prismic](https://prismic.io/) para portfolios y blogs.

<img width="1280" alt="prist" src="https://user-images.githubusercontent.com/5288685/63654882-51787e00-c746-11e9-9e9e-2ab823129d93.png">


### 🖥 [DEMO](http://www.helloimrafa.com)

## Características

- Carga instantánea de páginas.
- Optimización de velocidad 100%.
- Conexión con Prismic CMS para publicar posts y trabajos automáticamente.
- Secciones de Hero, Portfolio y About personalizables.
- Sección de Favoritos personalizable para que te conozcan mejor.
- Componentes styled de Emotion [Emotion] (https://emotion.sh/docs/styled)
- Layout y páginas para Blog
- Layout y páginas para Portfolio
- Google Analytics
- Diseño responsive

## Primeros pasos

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rafaelalberola/easyfolio)

1. **Crea un sitio con Gatsby.**

Usa la interfaz de linea de comandos (CLI) de Gatsby para crear un nuevo sitio, copiando la ruta de este proyecto. Si no tienes instalada la interfaz de línea de comandos de Gatsby, lee [las instrucciones](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli).

```sh
gatsby new YOUR-PROJECT-NAME https://github.com/rafaelalberola/easyfolio
```

2. **Empieza a desarrollar.**

Entra en el directorio de tu sitio e introduce los comandos a continuación para instalar Node.

```sh
cd YOUR-PROJECT-NAME
npm install
gatsby develop
```

3. **Abre el código y empieza a personalizar**

Tu sitio ahora está alojado en `http://localhost:8000`

_Nota: También verás un segundo link: _`http://localhost:8000/___graphql`_. Esto es una herramineta que puedes utilizar para consultar los datos que tu web refleja Puedes aprender más en [Tutorial Gatsby](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._


## Configurando Prismic

1. **Crea una cuenta y un repositorio**

Dirígete a [Prismic](https://prismic.io/signup) y crea una nueva cuenta. Una vez tengas una cuenta, crea un repositorio.

2. **Añade el repositorio a tu proyecto**

En tu archivo `gatsby-config.js`, añade el nombre de tu repositorio de Prismic en el campo `repositoryName`:

```
`gatsby-plugin-sharp`,
    {
        resolve: 'gatsby-source-prismic-graphql',
        options: {
            repositoryName: 'REPO-NAME', // (REQUIRED, replace with your own)
        }
    },
```
3. **Define tus Custom Type o Campos Personalizados**

Este ejemplo usa tres Campos Personalizados

![image](https://user-images.githubusercontent.com/5288685/62646196-c01ea480-b91b-11e9-8d30-d9fbf8d1df36.png)

Crea los siguientes campos seleccionando "Create New" en la parte superior derecha de tu pantalla y selecciona, o bien "Repeatable Type", o bien "Single Type".

**1. Inicio** (Single)

![image](https://user-images.githubusercontent.com/5288685/65046592-f265ed80-d92e-11e9-8700-4602b9038c0d.png)

En el panel derecho, selecciona el *Editor JSON* y pega el siguiente código:

```
{
  "Main" : {
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "homepage"
      }
    },
    "hero_title" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "heading1, hyperlink",
        "allowTargetBlank" : true,
        "label" : "hero title",
        "placeholder" : "Hello world"
      }
    },
    "hero_button_text" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "hyperlink",
        "label" : "hero button text",
        "placeholder" : "Click me!"
      }
    },
    "hero_button_link" : {
      "type" : "Link",
      "config" : {
        "allowTargetBlank" : true,
        "label" : "hero button link",
        "placeholder" : "Click me!"
      }
    },
    "content" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
        "allowTargetBlank" : true,
        "label" : "content"
      }
    },
    "about_title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading3",
        "label" : "about title",
        "placeholder" : "About"
      }
    },
    "about_bio" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph, preformatted, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
        "allowTargetBlank" : true,
        "label" : "about bio",
        "placeholder" : "Lorem ipsum..."
      }
    },
    "about_links" : {
      "type" : "Group",
      "config" : {
        "fields" : {
          "about_link" : {
            "type" : "StructuredText",
            "config" : {
              "single" : "hyperlink",
              "allowTargetBlank" : true,
              "label" : "about link",
              "placeholder" : "ie. Github"
            }
          }
        },
        "label" : "about links"
      }
    }
  }
}
```

**2. Publicación o Post de Blog** (Repeatable)

Deberás cambiar el campo  `Your name goes here` por tu nombre:

```
{
  "Main" : {
    "post_title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1, heading2, heading3, heading4, heading5, heading6",
        "label" : "post title"
      }
    },
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "post uid"
      }
    },
    "post_category" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading5",
        "label" : "post category"
      }
    },
    "post_preview_description" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph, strong, em, hyperlink, list-item",
        "label" : "post preview description"
      }
    },
    "post_author" : {
      "type" : "Select",
      "config" : {
        "options" : [ "Your name goes here" ],
        "default_value" : "Your name goes here",
        "label" : "post author"
      }
    },
    "post_hero_image" : {
      "type" : "Image",
      "config" : {
        "constraint" : { },
        "thumbnails" : [ ],
        "label" : "post hero image"
      }
    },
    "post_hero_annotation" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading6, strong, em, hyperlink",
        "allowTargetBlank" : true,
        "label" : "post hero annotation"
      }
    },
    "post_body" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
        "allowTargetBlank" : true,
        "label" : "post body"
      }
    },
    "post_date" : {
      "type" : "Date",
      "config" : {
        "label" : "post date"
      }
    }
  }
}
```

**3. Proyecto** (Repeatable)
```
{
  "Main" : {
    "project_title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "label" : "project title"
      }
    },
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "project uid"
      }
    },
    "project_category" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading5",
        "label" : "project category"
      }
    },
    "project_preview_description" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph, strong, em, hyperlink",
        "allowTargetBlank" : true,
        "label" : "project preview description"
      }
    },
    "project_preview_thumbnail" : {
      "type" : "Image",
      "config" : {
        "constraint" : { },
        "thumbnails" : [ ],
        "label" : "project preview thumbnail"
      }
    },
    "project_hero_image" : {
      "type" : "Image",
      "config" : {
        "constraint" : { },
        "thumbnails" : [ ],
        "label" : "project hero image"
      }
    },
    "project_description" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
        "allowTargetBlank" : true,
        "label" : "project description"
      }
    },
    "project_post_date" : {
      "type" : "Date",
      "config" : {
        "label" : "project post date"
      }
    }
  }
}
```

Adaptado y traducido por [Rafael Alberola](https://www.helloimrafa.com/) a partir del código de [Marguerite Roth](https://www.marguerite.io/)