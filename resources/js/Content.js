export default class Content {

    appInformation = "teste";

    menuLinks = [
        {link: "./home.html", text: "Início", route: "home"},
        {link: "./about.html", text: "Sobre", route: "about"},
        {link: "./services.html", text: "Serviços Oferecidos", route: "services"},
        {link: "./related.html", text: "Páginas Relacionadas", route: "related"},
        {link: "./contact.html", text: "Contato", route: "contact"},
    ]

    noresults = {
        route: "noresults",
        title: "Sem Resultado",
        content: {
            textblock: {
                title: "",
                subtitle: "Sem resultados para esta pesquisa",
                text: [
                    {phrase: "<br>"},
                    {phrase: "<br>"},
                    {phrase: "Não foi possível encontrar resultados para essa informação."},
                    {phrase: "<br>"},
                    {phrase: "<br>"},
                ]
            }
        }
    }

    home = {
        route: "home",
        title: "Home",
        content: {
            carousel: [
                {title: "Bem Vindo ao Nosso Site", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac sodales ante.", image: "./dist/images/montain.jpg", alt: "Montanha"},
                {title: "Bem Vindo ao Nosso Site", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac sodales ante.", image: "./dist/images/forest.jpg", alt: "Floresta"},
                {title: "Bem Vindo ao Nosso Site", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac sodales ante.", image: "./dist/images/sand.jpg", alt: "Areia"},
                {title: "Bem Vindo ao Nosso Site", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac sodales ante.", image: "./dist/images/everest.jpg", alt: "Monte Everest"},
            ],
            postsGallery: [
                {title: "Lorem Ipsum", text: "Lorem Ipsum", image: "./dist/images/montain.jpg", alt: "Montanha"},
                {title: "Lorem Ipsum", text: "Lorem Ipsum", image: "./dist/images/everest.jpg", alt: "Monte Everest"},
                {title: "Lorem Ipsum", text: "Lorem Ipsum", image: "./dist/images/forest.jpg", alt: "Floresta"},
                {title: "Lorem Ipsum", text: "Lorem Ipsum", image: "./dist/images/sand.jpg", alt: "Areia"},
            ]
        }
    }

    about = {
        route: "about",
        title: "Sobre Nós",
        content: {
            textblock: {
                title: "Sobre Nós",
                subtitle: "Um pouco sobre Nós",
                text: [
                    {phrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus volutpat magna sollicitudin luctus. Sed pretium nulla vitae mauris pulvinar, sed posuere nunc lacinia. Sed ut ipsum egestas, egestas neque sed, vestibulum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce at euismod magna, eget semper erat. Nullam eu placerat ipsum, sed suscipit nisl. Etiam arcu arcu, euismod vitae quam at, fringilla varius enim. Curabitur finibus nibh sed nunc pharetra, id tincidunt nisl elementum. Ut viverra libero at pellentesque tristique. Donec quis dapibus leo. Integer et ligula quam. Aliquam quis neque leo."},
                    {phrase: "Nulla varius sagittis dignissim. Mauris vestibulum non massa et sollicitudin. Suspendisse varius mollis urna ac iaculis. Ut sollicitudin nisi eget feugiat auctor. Quisque nec lectus sed est mollis imperdiet. Ut rhoncus et est eu pellentesque. Duis eleifend justo a pharetra vulputate. Sed non tempor libero, at maximus ligula. Nullam quis lacus erat. Suspendisse rutrum lectus in nibh sollicitudin, sed ultrices augue semper. Vestibulum congue varius purus, et ultricies libero vestibulum et. Suspendisse potenti."},
                ]
            }
        }
    }

    services = {
        route: "services",
        title: "Nossos Serviços",
        content: {
            textblock: {
                title: "Serviços Oferecidos",
                subtitle: "Serviços que oferecemos",
                text: [
                    {phrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus volutpat magna sollicitudin luctus. Sed pretium nulla vitae mauris pulvinar, sed posuere nunc lacinia. Sed ut ipsum egestas, egestas neque sed, vestibulum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce at euismod magna, eget semper erat. Nullam eu placerat ipsum, sed suscipit nisl. Etiam arcu arcu, euismod vitae quam at, fringilla varius enim. Curabitur finibus nibh sed nunc pharetra, id tincidunt nisl elementum. Ut viverra libero at pellentesque tristique. Donec quis dapibus leo. Integer et ligula quam. Aliquam quis neque leo."},
                    {phrase: "Nulla varius sagittis dignissim. Mauris vestibulum non massa et sollicitudin. Suspendisse varius mollis urna ac iaculis. Ut sollicitudin nisi eget feugiat auctor. Quisque nec lectus sed est mollis imperdiet. Ut rhoncus et est eu pellentesque. Duis eleifend justo a pharetra vulputate. Sed non tempor libero, at maximus ligula. Nullam quis lacus erat. Suspendisse rutrum lectus in nibh sollicitudin, sed ultrices augue semper. Vestibulum congue varius purus, et ultricies libero vestibulum et. Suspendisse potenti."},
                ]
            }
        }
    }

    related = {
        route: "related",
        title: "Páginas Relacionadas",
        content: {
            textblock: {
                title: "Páginas Relacionadas",
                subtitle: "Páginas que se relacionam com a nossa",
                text: [
                    {phrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus volutpat magna sollicitudin luctus. Sed pretium nulla vitae mauris pulvinar, sed posuere nunc lacinia. Sed ut ipsum egestas, egestas neque sed, vestibulum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce at euismod magna, eget semper erat. Nullam eu placerat ipsum, sed suscipit nisl. Etiam arcu arcu, euismod vitae quam at, fringilla varius enim. Curabitur finibus nibh sed nunc pharetra, id tincidunt nisl elementum. Ut viverra libero at pellentesque tristique. Donec quis dapibus leo. Integer et ligula quam. Aliquam quis neque leo."},
                    {phrase: "Nulla varius sagittis dignissim. Mauris vestibulum non massa et sollicitudin. Suspendisse varius mollis urna ac iaculis. Ut sollicitudin nisi eget feugiat auctor. Quisque nec lectus sed est mollis imperdiet. Ut rhoncus et est eu pellentesque. Duis eleifend justo a pharetra vulputate. Sed non tempor libero, at maximus ligula. Nullam quis lacus erat. Suspendisse rutrum lectus in nibh sollicitudin, sed ultrices augue semper. Vestibulum congue varius purus, et ultricies libero vestibulum et. Suspendisse potenti."},
                ]
            }
        }
    }

    contact = {
        route: "contact",
        title: "Contato",
        content: {
            form: {
                title: "Fale Conosco",
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                button: "ENVIAR",
                fields: [
                    {label: "Nome Completo:", type: "text", name: "nome", id: "form-nome", required: true},
                    {label: "E-mail:", type: "email", name: "email", id: "form-email", required: true},
                    {label: "Telefone:", type: "text", name: "telefone", id: "form-telefone", required: true},
                    {label: "Escreva sua mensagem:", type: "textarea", name: "mensagem", id: "form-mensagem", required: true},
                ]
            }
        }
    }

    general = {
        footer: {
            footerItems: [
                {
                    title: "Popular Posts",
                    content: [
                        {
                            footerPosts: [
                                {text: "Lorem Ipsum is simply dummy text of the printing.", date: "25-Semptember 2013"},
                                {text: "Lorem Ipsum is simply dummy text of the printing.", date: "25-Semptember 2013"}
                            ]
                        }
                    ]
                },
                {
                    title: "Tags",
                    content: [
                        {
                            tags: [
                                {name: "Sobre", link:"./about.html", size:"16px"},
                                {name: "Início", link:"./home.html", size:"32px"},
                                {name: "Serviços Oferecidos", link:"./services.html", size:"20px"},
                                {name: "Páginas Relacionadas", link:"./related.html", size:"14px"},
                                {name: "Contato", link:"./contact.html", size:"28px"},
                            ]
                        }
                    ]
                },
                {
                    title: "A Little About Us",
                    content: [
                        {
                            text: [
                                {phrase: "There are many variation of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."},
                                {phrase: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."},
                            ]
                        }
                    ]
                },
                {
                    title: "Get in touch",
                    content: [
                        {
                            text: [
                                {phrase: "Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
                            ],
                        },
                        {
                            footerInfo: [
                                {icon: "bi-geo-alt-fill", info: "Texas, US"},
                                {icon: "bi-envelope-fill", info: "email@email.com"},
                                {icon: "bi-telephone-fill", info: "890-09880-45590"},
                            ]
                        },
                    ]
                },
            ]
        },
        copyrightAndSocial: {
            copyright: "© "+ new Date().getFullYear() + " Web World. All rights reserved. Theme by cssautther",
            socialmedia: [
                {icon: "logo-rss", link: "#"},
                {icon: "logo-facebook", link: "#"},
                {icon: "logo-twitter", link: "#"},
                {icon: "logo-linkedin", link: "#"},
            ]
        }
    }

}