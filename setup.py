# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in marketing/__init__.py
from marketing import __version__ as version

setup(
	name='marketing',
	version=version,
	description='An app for all things marketing related.',
	author='Filip Ilić',
	author_email='filip@filipilic.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
