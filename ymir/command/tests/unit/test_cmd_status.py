import os
import shutil
import unittest

from google.protobuf.json_format import ParseDict

from mir.commands.status import CmdStatus
from mir.protos import mir_command_pb2 as mirpb
from mir.tools import mir_storage_ops
from mir.tools.code import MirCode
from tests import utils as test_utils


# test cases
class TestCmdStatus(unittest.TestCase):
    def test_status_00(self):
        mir_root = test_utils.dir_test_root(self.id().split(".")[-3:])
        if os.path.isdir(mir_root):
            shutil.rmtree(mir_root)
        os.makedirs(mir_root)

        test_utils.mir_repo_init(mir_root)
        # prepare branch a
        test_utils.mir_repo_create_branch(mir_root, "a")
        self._prepare_mir_repo_branch_mining(mir_root)

        args = type('', (), {})()
        args.mir_root = mir_root
        status_instance = CmdStatus(args)
        ret = status_instance.run()
        assert ret == MirCode.RC_OK

    def _prepare_mir_repo_branch_mining(self, mir_repo_root):
        mir_metadatas = mirpb.MirMetadatas()
        dict_metadatas = {
            'attributes': {
                'd4e4a60147f1e35bc7f5bc89284aa16073b043c9': {
                    'assetType': 'AssetTypeImageJpeg',
                    'width': 1080,
                    'height': 1620,
                    'imageChannels': 3
                }
            }
        }
        ParseDict(dict_metadatas, mir_metadatas)

        mir_annotations = mirpb.MirAnnotations()
        mir_annotations.prediction.type = mirpb.ObjectType.OT_NO_ANNOTATIONS
        mir_annotations.ground_truth.type = mirpb.ObjectType.OT_NO_ANNOTATIONS

        mir_datas = {
            mirpb.MirStorage.MIR_METADATAS: mir_metadatas,
            mirpb.MirStorage.MIR_ANNOTATIONS: mir_annotations,
        }
        task = mir_storage_ops.create_task_record(task_type=mirpb.TaskType.TaskTypeMining,
                                                  task_id='mining-task-id',
                                                  message='mining')
        mir_storage_ops.MirStorageOps.save_and_commit(mir_root=mir_repo_root,
                                                      mir_branch='a',
                                                      his_branch='master',
                                                      mir_datas=mir_datas,
                                                      task=task)
