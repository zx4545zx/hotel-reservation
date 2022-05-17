class AddonserviceroomsController < ApplicationController
  before_action :set_addonserviceroom, only: %i[ show update destroy ]

  # GET /addonservicerooms
  def index
    @addonservicerooms = Addonserviceroom.all

    render json: @addonservicerooms
  end

  # GET /addonservicerooms/1
  def show
    render json: @addonserviceroom
  end

  # POST /addonservicerooms
  def create
    @addonserviceroom = Addonserviceroom.new(addonserviceroom_params)

    if @addonserviceroom.save
      render json: @addonserviceroom
    else
      render json: @addonserviceroom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /addonservicerooms/1
  def update
    if @addonserviceroom.update(addonserviceroom_params)
      render json: @addonserviceroom
    else
      render json: @addonserviceroom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /addonservicerooms/1
  def destroy
    @addonserviceroom.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_addonserviceroom
      @addonserviceroom = Addonserviceroom.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def addonserviceroom_params
      params.require(:addonserviceroom).permit(:name, :price)
    end
end
