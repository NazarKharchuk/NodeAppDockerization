# NodeAppDockerization

<h3>Commannds used:</h3>
<dl>
  <dt><i><b>docker build . -t nazariikharchuk/node_app_docker</b></i></dt>
      <dd><i>- the docker build command builds Docker images.</i></dd>
  <dt><i><b>docker run -p 80:80 -d nazariikharchuk/node_app_docker </b></i></dt>
      <dd><i>- the docker run command creates running containers from images.</i></dd>
  <dt><i><b>docker stop serene_nash</b></i></dt>
      <dd><i>- the docker stop command attempts to stop a running container.</i></dd>
  <dt><i><b>docker login</b></i></dt>
      <dd><i>- command is used to login to the repository.</i></dd>
  <dt><i><b>docker images</b></i></dt>
      <dd><i>- command is used to view the generated images.</i></dd>
  <dt><i><b>docker run -p 80:80 --memory="500m" --cpus="1.0" -d nazariikharchuk/node_app_docker</b></i></dt>
      <dd><i>- the docker run command creates running containers from images with cpu and memory limitations.</i></dd>
  <dt><i><b>docker push nazariikharchuk/node_app_docker</b></i></dt>
      <dd><i>- command is used to push the image to the repository.</i></dd>                  
</dl>

