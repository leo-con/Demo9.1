if (typeof Genesys == "undefined") {
  genesysWidget();
}

function record_abandono_booking() {
  Genesys("command", "Journey.record", { eventName: "abandono_booking" });
}

function genesysWidget() {
  (function (g, e, n, es, ys) {
    g["_genesysJs"] = e;
    g[e] =
      g[e] ||
      function () {
        (g[e].q = g[e].q || []).push(arguments);
      };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement("script");
    ys.async = 1;
    ys.src = n;
    ys.charset = "utf-8";
    document.head.appendChild(ys);
  })(window, "Genesys", "https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js", {
    environment: "prod-sae1",
    deploymentId: "fa18dfce-195d-443e-97f5-d70e2ac1170c",
  });
}
