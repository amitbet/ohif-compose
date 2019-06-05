window.config = {
    routerBasename: '/',
    relativeWebWorkerScriptsPath: '',
    servers: {
      dicomWeb: [
        {
	      name: "DCM4CHEE",
		  wadoUriRoot: "http://35.246.150.204/arc/dcm4chee-arc/aets/DCM4CHEE/wado",
		  qidoRoot: "http://35.246.150.204/arc/dcm4chee-arc/aets/DCM4CHEE/rs",
		  wadoRoot: "http://35.246.150.204/arc/dcm4chee-arc/aets/DCM4CHEE/rs",
		  qidoSupportsIncludeField: false,
		  imageRendering: "wadouri",
		  thumbnailRendering: "wadors",
          requestOptions: {
            requestFromBrowser: true,
            auth: "admin:admin",
          },
        },
      ],
    },
  }

