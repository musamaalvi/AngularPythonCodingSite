cd libraries
pip install Flask-1.0.2-py2.py3-none-any.whl
pip install Flask_Cors-3.0.7-py2.py3-none-any.whl
pip install Flask_RESTful-0.3.7-py2.py3-none-any.whl
pip install PyInstaller-3.4-py2.py3-none-any.whl
cd Flask-Jsonpify-1.5.0
python setup.py install
cd ..//..
pyinstaller run_service.py
pyinstaller run_service.py -F
