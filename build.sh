#!/bin/bash

vuepress build docs
cp -r docs/.vuepress/dist/* ./

