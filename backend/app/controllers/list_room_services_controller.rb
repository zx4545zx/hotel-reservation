class ListRoomServicesController < ApplicationController
  before_action :set_list_room_service, only: %i[ show update destroy ]

  def index
    @list_room_services = ListRoomService.all

    render json: @list_room_services
  end

  def show
    render json: @list_room_service
  end

  def create
    @list_room_service = ListRoomService.new(list_room_service_params)

    if @list_room_service.save
      render json: @list_room_service
    else
      render json: @list_room_service.errors, status: :unprocessable_entity
    end
  end

  def update
    if @list_room_service.update(list_room_service_params)
      render json: @list_room_service
    else
      render json: @list_room_service.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @list_room_service.destroy
  end

  private
    def set_list_room_service
      @list_room_service = ListRoomService.find(params[:id])
    end

    def list_room_service_params
      params.require(:list_room_service).permit(:room_id, :serviceroom_id)
    end
end
