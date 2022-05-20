class ListPackageRoomsController < ApplicationController
  before_action :set_list_package_room, only: %i[ show update destroy ]

  def index
    @list_package_rooms = ListPackageRoom.all

    render json: @list_package_rooms
  end

  def show
    render json: @list_package_room
  end

  def create
    @list_package_room = ListPackageRoom.new(list_package_room_params)

    if @list_package_room.save
      render json: @list_package_room, status: :created, location: @list_package_room
    else
      render json: @list_package_room.errors, status: :unprocessable_entity
    end
  end

  def update
    if @list_package_room.update(list_package_room_params)
      render json: @list_package_room
    else
      render json: @list_package_room.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @list_package_room.destroy
  end

  private
    def set_list_package_room
      @list_package_room = ListPackageRoom.find(params[:id])
    end

    def list_package_room_params
      params.require(:list_package_room).permit(:packages_id, :roomtypes_id, :value)
    end
end
