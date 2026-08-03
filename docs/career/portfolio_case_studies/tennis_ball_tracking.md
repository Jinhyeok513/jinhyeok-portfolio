# Tennis Ball Tracking and Trajectory Visualisation

## Overview
This project demonstrates classical computer-vision tracking of a tennis ball in broadcast-style footage. The portfolio presents the result as a video-based tracking and trajectory visualisation project rather than overstating fully reliable real-time performance.

## Problem
The tennis ball is small, fast, blurred and frequently hidden by court lines, players, net regions and camera motion. A tracking pipeline must handle noise and short detection gaps.

## My Role
Jinhyeok implemented and documented the Kalman-filter tracking workflow, detection cues, trajectory rendering and evaluation diagnostics presented in the portfolio.

## Approach
- Used OpenCV frame processing with HSV colour cues, whiteness cues, optical flow and blobness scoring.
- Applied court masking and net-region suppression to reduce false positives.
- Used Kalman filtering to smooth noisy candidate detections and predict short gaps.
- Packaged a portfolio-ready MP4 result video and frame-level diagnostics.

## Results
- Published a 207-frame tracking output with representative captures and trajectory visualisation.
- Reported sparse-label metrics: mean IoU 0.1827, Success@IoU>=0.5 of 2.4% and mean CLE 131.18 px.

## Limitations
The project is best presented as video-based tracking and trajectory visualisation. The sparse metrics show that the method is educational and diagnostic, not a production sports analytics system.

## Tools
Python, OpenCV, NumPy, Kalman filtering, FFmpeg, IoU/CLE evaluation.
