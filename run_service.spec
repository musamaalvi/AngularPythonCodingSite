# -*- mode: python -*-

block_cipher = None


a = Analysis(['C:\\Users\\user\\Desktop\\coding_bat_website\\AngularPythonCodingSite_Usama\\AngularPythonCodingSite\\\\\\run_service.py'],
             pathex=['C:\\Users\\user\\Desktop\\coding_bat_website\\AngularPythonCodingSite_Usama\\AngularPythonCodingSite'],
             binaries=[],
             datas=[],
             hiddenimports=[],
             hookspath=[],
             runtime_hooks=[],
             excludes=[],
             win_no_prefer_redirects=False,
             win_private_assemblies=False,
             cipher=block_cipher,
             noarchive=False)
pyz = PYZ(a.pure, a.zipped_data,
             cipher=block_cipher)
exe = EXE(pyz,
          a.scripts,
          a.binaries,
          a.zipfiles,
          a.datas,
          [],
          name='run_service',
          debug=False,
          bootloader_ignore_signals=False,
          strip=False,
          upx=True,
          runtime_tmpdir=None,
          console=True )
