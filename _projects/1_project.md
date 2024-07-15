---
layout: page
title: OCToPi
description: A graph-neural-network-based approach to track reconstruction in the near-axis cores of jets, for the CMSSW. 
img: assets/img/banner.jpg
importance: 1
category: work
related_publications: false
---


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/banner.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<h3>Goal</h3>

Improve resolution of charged particle trajectory reconstruction, decrease computation time.

<h3>Introduction</h3>

LHC tracks mix, which produce merged clusters of charge in tracking layers. IT's difficult to optimize splitting these clusters. As the angle between a track and jet decreases, efficiency decreases. To improve reconstruction, enter DeepCore: a CNN that is basically doing it all on its own, and helps gain efficiency with high momentum. DeepCore has its own drawbacks: not clear if ti's learning correctly, doesn’t work well for endcaps, inefficient predictions, and constrains data representations. We want a GNN instead to help mitigate these drawbacks.

<h3>For more details, visit the <a href="https://github.com/joshshterenberg/OCToPi/tree/master">repo</a>.</h3>

