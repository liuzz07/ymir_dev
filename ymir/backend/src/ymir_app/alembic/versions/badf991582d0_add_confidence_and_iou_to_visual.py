"""add_confidence_and_iou_to_visualization

Revision ID: badf991582d0
Revises: 501414124392
Create Date: 2022-06-28 11:15:30.195372

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "badf991582d0"
down_revision = "a820368927ac"
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("visualization", schema=None) as batch_op:
        batch_op.add_column(sa.Column("confidence", sa.Float))
        batch_op.add_column(sa.Column("iou", sa.Float))

    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("visualization", schema=None) as batch_op:
        batch_op.drop_column("confidence")
        batch_op.drop_column("iou")

    # ### end Alembic commands ###
