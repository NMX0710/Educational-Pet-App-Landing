import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    GammaCorrectionPlugin,
    Vector3,
    AssetImporter,
    CanvasSnipperPlugin,
    mobileAndTabletCheck
} from "webgi";
import "./styles.css";
import lottie from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

async function setupViewer() {
    // Initialize the viewer
    const viewer = new ViewerApp({
        canvas: document.getElementById('webgi-canvas') as HTMLCanvasElement,
        useRgbm: false, // Use RGBM encoding!!
    });

    const isMobile = mobileAndTabletCheck();
    console.log(isMobile);

    // Add plugins individually.
    const manager = await viewer.addPlugin(AssetManagerPlugin);
    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    const exitButton = document.querySelector('.button-exit') as HTMLElement;

    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);

    // Lottie Loader Setup
    lottie.loadAnimation({
        container: document.getElementById('lottie-loader')!, // Target the loader div
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'path-to-your-lottie-file.json' // Replace with your Lottie animation path
    });

    // Loader progress tracking
    const importer = manager.importer as AssetImporter;
    importer.addEventListener('onProgress', (event) => {
        const progressRatio = event.loaded / event.total;
        console.log(`Progress: ${progressRatio}`);
    });

    importer.addEventListener('onLoad', (event) => {
        gsap.to('.loader', {
            y: '-100%',
            duration: 0.8,
            ease: 'power2.inOut',
            delay: 1,
            onComplete: () => {
                document.body.style.overflowY = 'auto';
            }
        });
    });

    viewer.renderer.refreshPipeline();
    await manager.addFromPath("./assets/scene.glb");

    viewer.getPlugin(TonemapPlugin)!.config!.clipBackground = true;
    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    window.scrollTo(0, 0);

    if (isMobile) {
        position.set(1.92, 0.27, 5.85);
        target.set(-0.22, 0.40, 1.33);
    } else {
        position.set(4.23, 1.22, 6.48);
        target.set(-1.87, -0.23, 0.53);
    }

    function setupScrollAnimation() {
        const tl = gsap.timeline();

        tl.to(position, {
            x: isMobile ? -0.68 : -0.31, y: isMobile ? 1.63 : 1.54, z: isMobile ? 3.93 : 2.79,
            scrollTrigger: {
                trigger: ".second",
                start: "top bottom",
                end: "top top",
                scrub: true,
                immediateRender: false,
            },
            onUpdate
        }).to(".section-one-container", {
            xPercent: '150',
            opacity: 0,
            scrollTrigger: {
                trigger: ".second",
                start: "top bottom",
                end: "top 80%",
                scrub: 1,
                immediateRender: false,
            }
        }).to(target, {
            x: isMobile ? 0.3 : 0.82, y: isMobile ? 0.68 : 0.10, z: isMobile ? 1.47 : -0.21,
            scrollTrigger: {
                trigger: ".second",
                start: "top bottom",
                end: "top top",
                scrub: true,
                immediateRender: false,
            }
        });

        tl.to(position, {
            x: 1.60, y: 4.22, z: 2.74,
            scrollTrigger: {
                trigger: ".third",
                start: "top bottom",
                end: "top top",
                scrub: true,
                immediateRender: false,
            },
            onUpdate
        }).to(".section-two-text", {
            xPercent: '-150',
            opacity: 0,
            scrollTrigger: {
                trigger: ".third",
                start: "top bottom",
                end: "top 80%",
                scrub: 1,
                immediateRender: false,
            }
        }).to(target, {
            x: -0.34, y: 0.40, z: 1.39,
            scrollTrigger: {
                trigger: ".third",
                start: "top bottom",
                end: "top top",
                scrub: true,
                immediateRender: false,
            }
        });
    }

    setupScrollAnimation();

    let needsUpdate = true;
    function onUpdate() {
        needsUpdate = true;
        viewer.renderer.resetShadows();
    }

    viewer.addEventListener('preFrame', () => {
        if (needsUpdate) {
            camera.positionUpdated(false);
            camera.targetUpdated(true);
            needsUpdate = false;
        }
    });

    document.querySelector('.button-navbar')?.addEventListener('click', () => {
        window.location.replace('form.html');
    });

    document.querySelector('.button-hero')?.addEventListener('click', () => {
        const element = document.querySelector('.second');
        window.scrollTo({ top: element?.getBoundingClientRect().top, left: 0, behavior: 'smooth' });
    });

    document.querySelector('.button-footer')?.addEventListener('click', () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
}

setupViewer();
