let scene, camera, renderer, torus;

function init(){
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({antialias : true});

    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

    const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
    // const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );

    const texture = new THREE.TextureLoader().load('textures/FloorsCheckerboard_S_Normal.jpg')
    const material = new THREE.MeshBasicMaterial( { map: texture, side: THREE.DoubleSide } );
    torus = new THREE.Mesh( geometry, material );
    scene.add( torus );
    console.log(geometry.verticles);

    // const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.2 );
    // directionalLight.position.x = 3;
    // directionalLight.position.y = 4;
    // directionalLight.position.z = 4;
    // scene.add( directionalLight );

    camera.position.z = 30;

}

const animate = function () {
	requestAnimationFrame( animate );

	torus.rotation.x += 0.05;
	torus.rotation.y += 0.05;
	torus.rotation.z += 0.05;

	renderer.render( scene, camera );
	};

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    window.addEventListener('resize', onWindowResize, false);

    init();
	animate();


// let scene, camera, renderer, torus;

// function init(){
//     scene = new THREE.Scene();

//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//     renderer = new THREE.WebGLRenderer({antialias : true});

//     renderer.setSize( window.innerWidth, window.innerHeight );

//     document.body.appendChild( renderer.domElement );

//     const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
//     // const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );

//     const texture = new THREE.TextureLoader().load('textures/FloorsCheckerboard_S_Normal.jpg')
//     const material = new THREE.MeshBasicMaterial( { map: texture } );
//     torus = new THREE.Mesh( geometry, material );
//     scene.add( torus );

//     camera.position.z = 55;

// }

// const animate = function () {
// 	requestAnimationFrame( animate );

// 	torus.rotation.x += 0.05;
// 	torus.rotation.y += 0.05;

// 	renderer.render( scene, camera );
// 	};

//     function onWindowResize() {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize( window.innerWidth, window.innerHeight );
//     }

//     window.addEventListener('resize', onWindowResize, false);

//     init();
// 	animate();