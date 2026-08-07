# AI Gym Trainer - Exercise Video Analysis Application

## Overview
AI Gym Trainer is an end-to-end portfolio application for short exercise-video analysis. It combines exercise classification, pose landmark extraction, movement metrics, annotated output video and downloadable reporting.

## Problem
Workout video analysis needs more than a single prediction label. A useful review flow should show what the system saw, where it was uncertain and how results were generated.

## My Role
Jinhyeok built and documented the application workflow from video upload through preprocessing, MobileNetV2 inference, MediaPipe Pose analysis, OpenCV rendering and CSV/JSON reporting.

## Approach
- Accepted a short video clip through a web interface, with the public demo limited to 32 MB and 30 seconds.
- Sampled frames and classified supported exercise types with MobileNetV2.
- Extracted body landmarks with MediaPipe Pose.
- Calculated joint-angle metrics and rule-based feedback.
- Returned annotated video, session metrics and downloadable frame-level data.

## Results
- MobileNetV2 recorded 72.0% video accuracy and 78.18% video macro F1 on the documented held-out comparison data.
- A 10-video field test reached 20% video-level accuracy, documenting domain shift honestly.
- The pipeline supports annotated browser-playable video plus CSV and JSON exports.

## Limitations
This is a research prototype, not a medical or professional coaching tool. Confidence is not fully calibrated, rep counts remain heuristic and diverse user-recorded videos would be needed for robust public use.

## Tools
Next.js, React, TypeScript, FastAPI, Python, TensorFlow, MobileNetV2, MediaPipe Pose, OpenCV, Pandas, NumPy.
