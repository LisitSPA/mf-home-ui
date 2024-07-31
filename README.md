---
## Bienvenido al Microfrontend de Gufo

### mf-home-ui (Microfrontend de home)

#### Microfrontend que maneja la pantalla de home.
---

Arquitectura del proyecto:

- **`/src`**
  - `/pages`
  - `/components`
  - `root.component.ts` 

#### Importante

Para poder levantar el microfrontend en local tener también clonados e instalados los proyectos:

- [mf-root-ui](https://github.com/LisitSPA/mf-root-ui.git)
- [mf-style-guide-ui](https://github.com/LisitSPA/mf-style-guide-ui.git)

(*) Esto iniciará el orquestador y el mf de lógica/componentes reutilizables que se consumen a nivel global.

## Comandos específicos para este proyecto

### Instalación

1. [Configura tus credenciales SSH en GitLab](https://docs.gitlab.com/ee/user/ssh.html)
2. Clonar el repo

   ```sh
      git clone git@github.com:LisitSPA/mf-home-ui.git
   ```

3. Instalar NPM packages

   ```sh
     npm install --legacy-peer-deps
   ```

### Uso

- Inicia el desarrollo en local: http://localhost:9000/

```
npm start
```
