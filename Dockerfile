FROM node:16.11.0
LABEL maintainer="Mircea NISTOR <mircea.nistor@mesh.xyz>"
LABEL repository="git@github.com:rrkeji/runnerc-did-driver.git"

USER root

# add source files
RUN mkdir "runnerc-did-driver"
ADD LICENSE package.json yarn.lock README.md runnerc-did-driver/
ADD src/ runnerc-did-driver/src/
RUN cd runnerc-did-driver && yarn install --prod --frozen-lockfile

EXPOSE 8081

ENTRYPOINT ["node", "/runnerc-did-driver/src/server.js"]
